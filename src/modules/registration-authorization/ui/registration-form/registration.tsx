import { useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./registration.styles";
import { Input } from "@shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../model/schemas/registration-schema";
import { Button } from "@shared/ui/button";
import { useRegisterMutation, useVerifyEmailMutation } from "../../api/auth-api";
import { useRouter } from "expo-router";
import { RegisterRequest } from "../../api/api.types";
import { setCredentials } from "../../api/auth.slice";

export function Registration() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showOtpModal, setShowOtpModal] = useState(false);
    
    const [register, { data, isSuccess, isLoading }] = useRegisterMutation();
    const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputs = useRef<Array<TextInput | null>>([]);
    const isCodeComplete = code.every(char => char.length === 1);

    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        if (isSuccess) {
            setShowOtpModal(true);
        }
    }, [isSuccess]);

    const onSubmit = async (formData: RegisterRequest) => {
        console.log("Дані форми валідні, відправка на бк:", formData);
        try {
            const result = await register(formData).unwrap(); 

            if(result.token){
                dispatch(setCredentials({ token: result.token }));
                console.log("Токен збережено в стор")
            }
        } catch (e: any) {
            alert(e.data?.message || "Помилка при реєстрації");
            console.error("Помилка при реєстрації:", e);
        }
    };

    const handleConfirm = async () => {
        if (!isCodeComplete) {
            alert("Будь ласка, введіть повний 6-значний код");
            return;
        }

        try {
            const email = getValues("email");
            const fullCode = code.join('');
            
            await verifyEmail({ email, code: fullCode }).unwrap();
            
            setShowOtpModal(false);
            router.replace("/(tabs)");
        } catch (e: any) {
            alert(e.data?.message || "Невірний код підтвердження");
        }
    };

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text.length > 0 && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.inputContainer}> 
                            <Input
                                style={styles.input}
                                label="Електронна пошта"
                                placeholder="you@example.com"
                                value={value}
                                onChangeText={onChange}
                                isValidate={!!errors.email}
                                errorMessage={errors.email?.message}
                            />
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.input}
                                label="Введи пароль"
                                placeholder="Введи свій пароль"
                                fieldType="password"
                                value={value}
                                onChangeText={onChange}
                                isValidate={!!errors.password}
                                errorMessage={errors.password?.message}
                            />
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.input}
                                label="Підтверди пароль"
                                placeholder="Повтори свій пароль"
                                fieldType="password"
                                value={value}
                                onChangeText={onChange}
                                isValidate={!!errors.confirmPassword}
                                errorMessage={errors.confirmPassword?.message}
                            />
                        </View>
                    )}
                />

                <Button 
                    variant="fill" 
                    text={isLoading ? "Зачекайте..." : "Створити акаунт"}
                    style={styles.submitButton}
                    textStyle={{ fontSize: 18, fontWeight: "600" }}
                    disabled={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />
            </View>

            <Modal visible={showOtpModal} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Підтвердження пошти</Text>
                        <Text style={styles.modalSubTitle}>
                            Ми надіслали 6-значний код на вашу пошту (you@example.com). Введіть його нижче, щоб підтвердити акаунт
                        </Text>
                        
                        <Text style={styles.inputLabel}>Код підтвердження</Text>

                        <View style={styles.otpContainer}>
                            {[0, 2, 4].map((pairIndex) => (
                                <View key={pairIndex} style={styles.otpPair}>
                                    {[0, 1].map((offset) => {
                                        const index = pairIndex + offset;
                                        const value = code[index];
                                        return (
                                            <View key={index} style={styles.otpInputBox}>
                                                <TextInput
                                                    ref={(el) => { inputs.current[index] = el; }}
                                                    style={styles.textInput}
                                                    keyboardType="number-pad"
                                                    maxLength={1}
                                                    value={value}
                                                    onChangeText={(text) => handleChange(text, index)}
                                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                                />
                                                {value === '' && <View style={styles.underscore} />}
                                            </View>
                                        );
                                    })}
                                </View>
                            ))}
                        </View>

                        <Button 
                            variant="fill" 
                            text={isVerifying ? "Перевірка..." : "Підтвердити"} 
                            style={styles.modalButton}
                            disabled={!isCodeComplete || isVerifying}
                            onPress={handleConfirm} // Викликає верифікацію на БК
                        />
                        
                        <TouchableOpacity 
                            activeOpacity={0.7} 
                            style={styles.customBackButton} 
                            onPress={() => setShowOtpModal(false)}
                        >
                            <Text style={styles.customBackText}>Назад</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}


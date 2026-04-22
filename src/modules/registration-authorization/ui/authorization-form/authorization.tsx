import React from "react";
import { View } from "react-native";
import { styles } from "./authorization.styles";
import { Input } from "@shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authorizationSchema } from "../../model/schemas/authorization-schema";
import { Button } from "@shared/ui/button";
import { useLoginMutation } from "../../api/auth-api";
import { useRouter } from "expo-router";
import { AuthRequest } from "@modules/registration-authorization/api/api.types";

export function Authorization() {
    const router = useRouter();
    
    const [login, { isLoading }] = useLoginMutation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(authorizationSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (formData: AuthRequest) => {
        try {
            await login(formData).unwrap();
            
            router.replace("/(tabs)");
        } catch (e: any) {
            alert(e.data?.message || "Помилка при вході");
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
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.input}
                                label="Пароль"
                                placeholder="Введи пароль"
                                fieldType="password"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                isValidate={!!errors.password}
                                errorMessage={errors.password?.message}
                            />
                        </View>
                    )}
                />

                <Button 
                    variant="fill" 
                    text={isLoading ? "Вхід..." : "Увійти"} 
                    textStyle={{ fontSize: 18, fontWeight: "600" }}
                    style={styles.submitButton}
                    disabled={isLoading}
                    onPress={handleSubmit(onSubmit)} 
                />
            </View>
        </View>
    );
}
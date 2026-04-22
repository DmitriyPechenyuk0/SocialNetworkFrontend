import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { styles } from "./authorization.styles";
import { Input } from "@shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authorizationSchema } from "../../model/schemas/authorization-schema";
import { Button } from "@shared/ui/button";

export function Authorization() {
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
    return (
        <View className = "container">
            <View style = {styles.formWrapper}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value, onBlur } }) => (
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
                    text="Увійти" 
                    textStyle={{ fontSize: 18, fontWeight: "600" }}
                    style={styles.submitButton}
                    onPress={handleSubmit((data) => console.log("Створюємо...", data))}
                />
            </View>
        </View>
    )
}
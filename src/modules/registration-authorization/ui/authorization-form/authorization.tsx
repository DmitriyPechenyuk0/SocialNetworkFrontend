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
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                        label="Електронна пошта"
                        placeholder="you@example.com"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        isValidate={!!errors.email}
                        errorMessage={errors.email?.message}
                    />
                )}
            />
            
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                        label="Пароль"
                        placeholder="Введи пароль"
                        fieldType="password"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        isValidate={!!errors.password}
                        errorMessage={errors.password?.message}
                    />
                )}
            />
            <Button 
                variant="fill" 
                text="Створити акаунт" 
                textStyle={{ fontSize: 18, fontWeight: "600" }}
                style={styles.submitButton}
                onPress={handleSubmit((data) => console.log("Створюємо...", data))}
            />
        </View>
    )
}
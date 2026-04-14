import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { styles } from "./registration.styles";
import { Input } from "@shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../model/schemas/registration-schema";
import { Button } from "@shared/ui/button";

export function Registration() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Електронна пошта"
                        placeholder="you@example.com"
                        value={value}
                        onChangeText={onChange}
                        isValidate={!!errors.email}
                        errorMessage={errors.email?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Пароль"
                        placeholder="Введи пароль"
                        fieldType="password"
                        value={value}
                        onChangeText={onChange}
                        isValidate={!!errors.password}
                        errorMessage={errors.password?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Підтверди пароль"
                        placeholder="Повтори свій пароль"
                        fieldType="password"
                        value={value}
                        onChangeText={onChange}
                        isValidate={!!errors.confirmPassword}
                        errorMessage={errors.confirmPassword?.message}
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


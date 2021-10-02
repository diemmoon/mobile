import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { useNavigation } from '@react-navigation/core'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
// import { nameValidator } from '../helpers/nameValidator'
// import { confirmPasswordValidator } from '../helpers/confirmPasswordValidator'

export default function RegisterScreen() {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [passwordConfirm, setPasswordConfirm] = useState({ value: '', error: '' })

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    const passwordConfirmError = confirmPasswordValidator(password.value, passwordConfirm.value)
    if (emailError || passwordError || nameError || passwordConfirmError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setPasswordConfirm({ ...passwordConfirm, error: passwordConfirmError })
      return
    }
    // navigation.navigate('MainTab')
  }

  return (
    <Background>
      <Text style={styles.header}> TẠO TÀI KHOẢN </Text>
      <TextInput
        label="Họ & Tên"
        placeholder="Họ và tên"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />


      <TextInput
        label="Số điện thoai"
        placeholder="Số điện thoai"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mật khẩu"
        placeholder="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label="Xác nhận mật khẩu"
        placeholder="Xác nhận mật khẩu"
        returnKeyType="done"
        value={passwordConfirm.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!passwordConfirm.error}
        errorText={passwordConfirm.error}
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Đăng ký
      </Button>
      <View style={styles.row}>
        <Text>Đã có tài khoản ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  header: {
      fontSize: 21,
      color: theme.colors.primary,
      fontWeight: 'bold',
      paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Form, Input } from 'antd'

import { LocaleKeys } from '@/@types/locales'
import { useBoolean } from 'ahooks'
import { toast } from 'sonner'

interface Props {
    dictionary: LocaleKeys
    onSubmitForm: () => void
}

interface IFieldType {
    email: string
    password: string
}

function SignInForm({ dictionary, onSubmitForm }: Props) {
    const [isLoadingSignIn, { setTrue: setTrueLoadingSignIn, setFalse: setFalseLoadingSignIn }] =
        useBoolean(false)

    const [form] = Form.useForm<IFieldType>()

    const onSubmit = async (values: IFieldType) => {
        setTrueLoadingSignIn()

        
        setTimeout(() => {
            setFalseLoadingSignIn()
        }, 2000);
        
        toast.success("Login successfully")
        onSubmitForm()
    }

    return (
        <Form<IFieldType> form={form} layout="vertical" onFinish={onSubmit} autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                layout="vertical"
                rules={[
                    {
                        required: true,
                        message: 'Email is required',
                    },
                    {
                        type: 'email',
                        message: 'Email is invalid',
                    },
                ]}
            >
                <Input placeholder="name@example.com" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                layout="vertical"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder="********" />
            </Form.Item>

            <Form.Item>
                <Button
                    size='large'
                    className="mt-2 w-full !py-3"
                    loading={isLoadingSignIn}
                    htmlType="submit"
                >
                    {dictionary['Sign in']}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignInForm

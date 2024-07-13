import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

import React from 'react'

const LoginPage = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [inputUsernameMessage, setInputUsernameMessage] = useState("");
    const [inputPasswordMessage, setInputPasswordMessage] = useState("");

    const [isChecked, setIsChecked] = useState(false);

    const handleLogin = () => {
        const usernameIsValid = inputUsername.length >= 3
        const passwordIsValid = inputPassword.length >= 8

        if(!usernameIsValid){
            alert("username needs to be 3 characters or more")
            return
        }

        if(!passwordIsValid){
            alert("password needs to be 3 characters or more")
            return
        }

        alert(`Username ${inputUsername} | Password ${inputPassword}`)
    }
  return (
    <main className='px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[80vh]'>
        <form className="w-full max-w-[540px]" onSubmit={handleLogin}>
            <Card>
                <CardHeader>
                    <CardTitle>Welcome Back!</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input onChange={(e) => {
                            if(e.target.value.length < 3) {
                                setInputUsernameMessage("password needs to be 3 characters or more")
                            }else{
                                setInputUsernameMessage("")
                            }

                            setInputUsername(e.target.value);
                        }}
                        id="username" 
                        />
                        <p className='text-muted-foreground text-sm'>{inputUsernameMessage}</p>
                    </div>
                        <Label htmlFor="password">Password</Label>
                        <Input onChange={(e) => {
                            if(e.target.value.length < 8) {
                                setInputPasswordMessage("password needs to be 8 characters or more")
                            }else{
                                setInputPasswordMessage("")
                            }
                            setInputPassword(e.target.value);
                        }}
                        id="password" type={isChecked ? "text" : "password"}
                        />
                        <p className='text-muted-foreground text-sm'>{inputPasswordMessage}</p>
                    <div className='flex items-center space-x-2'>
                        <Checkbox onCheckedChange={(checked) => {
                            setIsChecked(checked);
                        }} id="show-password"/>
                        <Label htmlFor="show-password">Show Password</Label>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col space-y-4 w-full">
                        <Button 
                        type="submit"
                        disabled={inputUsername.length < 3 || inputPassword.length < 8}
                        >
                            Login
                            </Button>
                        <Button variant="link" className="w-full">Sign Up</Button>
                    </div>
                </CardFooter>
            </Card>
        </form>

    </main>
  )
}

export default LoginPage

import React, {ElementRef, useRef, useState, useEffect} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const [message, setMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_41glv2u', 'template_cxxw73f', form.current, {
                publicKey: 'VtSPfLncOMGc2d2q7',
            })
            .then(
                () => {
                    setMessage('Message sent!');
                    form.current?.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessage('Error sending email!');
                },
            );
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={'name'} name={'user_name'}/>
                    <S.Field required placeholder={'email'} name={'email'} type={'email'}/>
                    <S.Field required placeholder={'subject'} name={'subject'}/>
                    <S.Field required placeholder={'massage'} as={'textarea'} name={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
                {message && <S.Message>{message}</S.Message>}
            </Container>

        </S.Contacts>
    );
};
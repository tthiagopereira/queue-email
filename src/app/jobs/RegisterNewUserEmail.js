import Mail from "../lib/Mail";


export default {
    key: 'RegistrationNewMail',
    async handle({ data }) {

        const {user } = data;

        await Mail.sendMail({
            from: 'Fila Test <fila@fila.com>',
            to: `${user.name} < ${user.email}`,
            subject: `Cadastro realizado com sucesso`,
            html: `Olá ${user.name}, bem vindo ao cadastro de filas`,
        });
    }
}
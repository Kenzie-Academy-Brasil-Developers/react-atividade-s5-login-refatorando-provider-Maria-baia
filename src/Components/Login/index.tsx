import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";

const Login = () => {
    const {signIn} = useAuth();

    interface UserData {
        email: string;
        password: string;
    }

    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório!").email("E-mail inválido."),
        password: yup.string().required("Campo obrigatório!").matches(/[.{6,]+/, "mínimo 6 caracteres"),
    });
    const {register, handleSubmit, formState: {errors}} = useForm<UserData>({
        resolver: yupResolver(schema)
    });
    const onSubmitFunction = (data: UserData) => {
        signIn(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label>Email</label>
            <input placeholder="Email" {...register("email")}/>
            <span>{errors.email?.message}</span>
            <label>Password</label>
            <input  type="password" placeholder="Password" {...register("password")}/>
            <span>{errors.password?.message}</span>
            <button>Entrar</button>
        </form>
    );
};
export default Login;
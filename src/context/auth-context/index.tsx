import React, {
    createContext,
    Dispatch,
    ReactElement,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';

export interface AuthStore {
    isLogin: boolean;
    setLogged: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthStore | null>(null);

export const useAuthContext = () => useContext(AuthContext) as AuthStore;

interface Props {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props): ReactElement => {
    const [isLogin, setLogged] = useState<boolean>(false);

    const authStore = {
        isLogin,
        setLogged,
    };

    return <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>;
};

export interface NotificationContextValue {
    showNotification: (msg: string, type: "success" | "error" | "info" | "warning") => void;
}

export interface BtnProps {
    text: string;
    icon?: string;
    className?: string;
    onClick?: () => void;
}


export interface VideoCardProps {
    onClick?: () => void;
}

export interface VideoProps {
    _id?: string;
    title: string;
    image: string;
    publishingYear: string;
}

export interface VideoStateProps {
    error: string | null;
    videos: VideoProps[];
    video: VideoProps | null;
}

export interface UserProfileProps {
    _id?: string | null,
    email: string,
    username?: string,
    password: string ,
}
// Auth
export interface AuthProps {
    isLoggedIn: boolean,
    isInitialized?: boolean,
    user?: UserProfileProps | null,
    token?: string | null
}

export interface AuthActionProps {
    type: string,
    payload?: AuthProps,
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfileProps | null | undefined;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, username: string,) => Promise<void>;

    // addEvent: ();
    resetPassword?: (email: string) => Promise<void>;
    updateProfile?: VoidFunction;
};

export interface userStateProps {
    user: UserProfileProps | null,
    error: string | null,
    isLoggedIn: boolean,
}

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
  };
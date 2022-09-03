import { useRouter } from "next/router";

const isUserAuth = function(): void {
    const router = useRouter();
    if (typeof window !== "undefined") {
        let isAuth = "false";
        if (localStorage.getItem("auth") === "true") {
            isAuth = "true"
        } 

        if (isAuth === "false") {
            router.push("/");
        }
    }
}

export default isUserAuth;
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtserver } from "../util/api";

function useAuthority() {
  const navigate = useNavigate();
  const getCookie = Cookies.get("token");

  useEffect(() => {
    if (!getCookie) {
      moveToLogin();
      alert("다시 로그인 해주세요!");
    } else {
      authorityCheck();
    }
  }, [getCookie]);

  const authorityCheck = async () => {
    try {
      await jwtserver.get("/user", {
        headers: {
          authorization: `Bearer ${getCookie}`,
        },
      });
    } catch (error) {
      if (error.response.status === 401) {
        alert("토큰이 만료 되었습니다. 다시 로그인 해주세요.");
        Cookies.remove("token");
        moveToLogin();
      }
    }
  };

  const moveToLogin = () => {
    navigate("/login");
  };
  return [getCookie];
}

export default useAuthority;

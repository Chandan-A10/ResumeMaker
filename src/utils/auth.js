import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthenticationCheck = (mobile, users) => {
  const navigator = useNavigate();

  useEffect(() => {
    if (mobile) {
      const doesUserAuthenticated = users.some((user) => user.mobile === mobile && user.isAuth);
      if (!doesUserAuthenticated) {
        navigator("/");
      }
    } else {
      navigator("/");
    }
  }, [mobile, navigator, users]);
};

export default useAuthenticationCheck;
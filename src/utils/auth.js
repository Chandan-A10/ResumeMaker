import { useEffect } from "react";
import { useNavigate, useHistory } from "react-router-dom";

const useAuthenticationCheck = (mobile, users) => {
  const navigator = useNavigate();

  useEffect(() => {
    if (mobile) {
      const doesUserAuthenticated = users.some((user) => user.mobile === mobile && user.isAuth);
      if (!doesUserAuthenticated) {
        navigator('/',{state:'Login First'});
      }
    } else {
      navigator("/",{state:'Login First'});
    }
  }, [mobile, navigator, users]);
};

export default useAuthenticationCheck;
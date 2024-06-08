import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

const useTokenPresent = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user, navigate]);
};

export { useTokenPresent };

import { Button } from "@material-tailwind/react";

const Loginlogout = () => {
  return (
    <div className="flex items-center gap-x-1">
     <a href="/login" className="hidden lg:inline-block">
          <Button  size="sm">
            <span>Log In</span>
          </Button>
        </a>
        <a href="/signup" className="hidden lg:inline-block">
          <Button size="sm">
            <span>Sign Up</span>
          </Button>
        </a>
    </div>
  );
};

Loginlogout.propTypes = {};

export default Loginlogout;

import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

const logoutAction = () => {
  deleteItem("userName");
  toast.success("you deleted your account Successfully");
  return redirect("/");
};

export default logoutAction;

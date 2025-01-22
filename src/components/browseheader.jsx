import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useNavigate } from "react-router-dom";


const Browseheader = () => {


    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)

            .then(() => {
                // Sign-out successful.

                navigate("/");


            })

            .catch((error) => {
                // An error happened.
            });

    }

    return (
        <div className="flex justify-between bg-gradient-to-b from-black">

            <img className=" w-44 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="headerimage" />


            <div className="pr-5">

                <img className="h-12 w-14 rounded-md mt-3" src="https://occ-0-3709-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt=""></img>


                <button className="text-xs text-white bg-red-600 px-1 py-1 rounded-md hover:bg-red-700 mt-2 font-semibold" onClick={handleSignOut}>Sign out</button>


            </div>

        </div>
    )
};

export default Browseheader;
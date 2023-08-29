import axios from "axios"

interface funcProps{
    IP:string
}

const VerifyIp = async ({IP}:funcProps) => {
    // Fetch Response
    // console.log(IP)
    try {
        const res = await fetch(`http://${IP}/verifyIP`, {
            method:'GET'
        });

        const data:{Verified:boolean} = await res.json();

        return data.Verified


    } catch (error) {
        console.log(error)
        return false
    }
}

export default VerifyIp
import React from 'react'
import { IoMdContact } from "react-icons/io";
import '../styles/account.css'

const Account = () => {
  return (
    <div id='area-account'>
        <a href="#">Criar Conta</a>
        <IoMdContact id='icon_account' size={34} />
    </div>
  )
}

export default Account

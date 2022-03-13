import React from "react";
import * as S from "./style"
import MenuItem from "./menuItem";
import logo from "../../img/logo.svg"
import home from "../../img/home_fill.svg"
import user from "../../img/user.svg"
import mail from "../../img/mail.svg"
import save from "../../img/save.svg"
import link from "../../img/link.svg"
import exit from "../../img/sair.svg"
import Button from "../button";




function SideBar(){
    return(
        <S.SideBar>
            <S.Logo src={logo}></S.Logo>
            <S.Menu>
                <MenuItem text="Feed" icon={home} isActive={true}></MenuItem>
                <MenuItem text="Perfil" icon={user} ></MenuItem>
                <MenuItem text="Mensagens" icon={mail} ></MenuItem>
                <MenuItem text="Salvos" icon={save} ></MenuItem>
                <MenuItem text="Interações" icon={link} ></MenuItem>
            </S.Menu>
            <Button height={38} width={160} text="+Piu"/>
            <MenuItem text="Sair" icon={exit} ></MenuItem>
        </S.SideBar>

    )
}

export default SideBar;
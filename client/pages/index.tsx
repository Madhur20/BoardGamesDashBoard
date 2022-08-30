import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Top from '../components/Top'
import { Button } from '@mui/material'
import Link from 'next/link'
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Main from "./main";

const Index: NextPage = () => {
  return (
    <div className={styles.container1}>
     <Link href="/login"><Button variant="outlined" disableElevation color="primary" size='large'>Login</Button></Link>
     <Link href="/signup"><Button variant="outlined" disableElevation color="primary" size='large'>Sign Up</Button></Link>
    </div>
  )
}

export default Index;

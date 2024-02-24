"use client"
import React from 'react'
 import * as z from 'Zod'
 import { Button } from '@/components/ui/button'
 import {zodResolver} form "@hookform/resolvers/zod"
 import {useForm} from 'react-hook-form'
 import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 Formessage,
} from "@components/ui/form"
import { Input } from '@/components/ui/form'
import { FaFacebook,FaGithub,FaGoogle } from 'react-icons/fa';
import Link from "next/link"
const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page
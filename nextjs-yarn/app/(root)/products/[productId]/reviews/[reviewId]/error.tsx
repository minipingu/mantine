'use client'

import React, {startTransition} from 'react'
import {useRouter} from "next/navigation";
import {Button} from "@mantine/core";

const ErrorRoot = ({error,reset}:{error:Error, reset:()=>void}) => {

  const router = useRouter()
  const reload = () => {
    startTransition(()=> {
      router.refresh()
      reset()
    })
  }

  return (
    <div>{error.message} <Button onClick={reload}>Try Again</Button></div>
  )
}
export default ErrorRoot

"use client"
import { useState } from "react"

export const LoadingIcon = () => {
    const [loading, setLoading] = useState(true)
    const LoadingIconTrue  = () => {
        setLoading(true)
    }

    const LoadingIconFalse = () => {
        setLoading(false)
    }
    
    return{
        LoadingIconTrue,
        LoadingIconFalse
    }
}



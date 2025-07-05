**Условие**
```js
// задача: написать хук для запросов

const useFetch = (url, options) => {
  // TODO:
}

const App: FunctionComponent = () => {
    const { data, error, status, retry } = useFetch('/', {})
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```
Решение
```js
import { useState, useEffect } from 'react'

const useFetch = (url: string, options: RequestInit) => {
    const [data, setData] = useState<unknown>(null)
    const [error, setError] = useState<Error | null>(null)
    const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending')
    
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        fetch(url, { signal, ...options }).then(
            resData => resData.json()
        ).then(resData => {
            setData(resData)
            setError(null)
            setStatus('success')
        }).catch(resError => {
            setData(null)
            setError(resError)
            setStatus('error')
        })
        
        return () => {
           controller.abort()
        }
    }, [url, options])
    
    return { data, error, status }
}

const App: FunctionComponent = () => {
    const { data, error, status, retry } = useFetch('/', {})
    
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}
```
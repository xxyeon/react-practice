## react-router-dom
### router 설정
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

### Link 컴포넌트
```jsx
<Link to={router}>children</Link>
```
`children`을 클릭하면 `router`라는 경로로 이동하고 createBrowerRouter에 있는 path 값 중 일치하는 경로를 찾아 해당 element를 그려준다?

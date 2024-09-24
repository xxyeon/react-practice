## react-router-dom

공식 문서: https://reactrouter.com/en/main

### router 설정

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'route/:pathValue',
    element: <PathValue />,
  },
  {
    path: 'route', ///route? 로 쿼리 파라미터 값 넣어서 이동하면 /route 라우터로 이동한다.
    element: <QueryParam />,
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

### useParams

```jsx
// /books/:bookId 인 라우터의 element
const { bookId } = useParams() //{bookId:'20'}을 반환
```

## JS

### url에서 쿼리파라미터 값 가져오기

```javascript
const bookId = new URL(url).searchParams.get('key')
```

### .find(condition)

배열에서 조건에 맞는 첫번째 요소 반환

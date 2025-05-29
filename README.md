<h2>⚛️ React Hooks: Complete Guide</h2>

<p>
React Hooks are built-in functions introduced in <strong>React 16.8</strong> that allow you to use state and other React features in <strong>functional components</strong>, without writing class-based components.
</p>

<h3>🔗 Why Hooks?</h3>
<ul>
  <li>Write cleaner and more reusable code using functional components</li>
  <li>Avoid boilerplate code associated with class components</li>
  <li>Share logic between components using custom hooks</li>
</ul>

<hr />

<h3>🎣 Commonly Used React Hooks & Definitions</h3>

<h4>1. <code>useState()</code></h4>
<p>
Manages local component state.
</p>
<pre><code>const [count, setCount] = useState(0);</code></pre>

---

<h4>2. <code>useEffect()</code></h4>
<p>
Performs side effects (e.g., fetching data, subscriptions). Runs after render.
</p>
<pre><code>useEffect(() => {
  // side effect
  return () => {
    // cleanup
  };
}, [dependencies]);</code></pre>

---

<h4>3. <code>useContext()</code></h4>
<p>
Accesses the value from a React Context without wrapping components in Consumer.
</p>
<pre><code>const theme = useContext(ThemeContext);</code></pre>

---

<h4>4. <code>useRef()</code></h4>
<p>
Creates a mutable object that persists for the lifetime of the component.
Useful for accessing DOM nodes or storing instance values.
</p>
<pre><code>const inputRef = useRef(null);</code></pre>

---

<h4>5. <code>useMemo()</code></h4>
<p>
Memoizes a computed value so it's only recomputed when dependencies change.
</p>
<pre><code>const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);</code></pre>

---

<h4>6. <code>useCallback()</code></h4>
<p>
Returns a memoized version of a callback function that only changes if dependencies do.
</p>
<pre><code>const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);</code></pre>

---

<h4>7. <code>useReducer()</code></h4>
<p>
An alternative to <code>useState</code> for managing complex state logic.
</p>
<pre><code>const [state, dispatch] = useReducer(reducer, initialState);</code></pre>

---

<h4>8. <code>useLayoutEffect()</code></h4>
<p>
Like <code>useEffect</code>, but fires synchronously after DOM mutations and before the browser paints.
</p>
<pre><code>useLayoutEffect(() => {
  // run synchronously after DOM updates
});</code></pre>

---

<h4>9. <code>useImperativeHandle()</code></h4>
<p>
Customizes the instance value that is exposed to parent components when using <code>ref</code>. Used with <code>forwardRef</code>.
</p>
<pre><code>useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus()
}));</code></pre>

---

<h3>🧪 Example of a Custom Hook</h3>
<pre><code>function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}</code></pre>

---

<h3>📌 Summary Table</h3>
<table>
  <thead>
    <tr>
      <th>Hook</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>useState</code></td><td>Manages local state in functional components</td></tr>
    <tr><td><code>useEffect</code></td><td>Handles side effects after rendering</td></tr>
    <tr><td><code>useContext</code></td><td>Accesses context values directly</td></tr>
    <tr><td><code>useRef</code></td><td>Persists mutable values between renders</td></tr>
    <tr><td><code>useMemo</code></td><td>Memoizes expensive calculations</td></tr>
    <tr><td><code>useCallback</code></td><td>Memoizes functions to avoid re-renders</td></tr>
    <tr><td><code>useReducer</code></td><td>Handles complex state logic</td></tr>
    <tr><td><code>useLayoutEffect</code></td><td>Runs synchronously after DOM updates</td></tr>
    <tr><td><code>useImperativeHandle</code></td><td>Customizes <code>ref</code> instance values</td></tr>
  </tbody>
</table>

---

<h3>📚 Learn More</h3>
<p>
For full documentation, visit the <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">official React Hooks documentation</a>.
</p>

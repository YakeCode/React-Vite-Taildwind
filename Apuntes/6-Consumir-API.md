# Consumir API

para consumir una API en react utilisamos useState y useEffect oues el proposito de use effect es manejar efectos secundarios, operaciones que se renderizan fuera del ciclo normal de renderizado de react

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); ---La dependencia vacía indica que esto se ejecuta solo una vez, al montar el componente.

-----------------------------------------------------------------------------------


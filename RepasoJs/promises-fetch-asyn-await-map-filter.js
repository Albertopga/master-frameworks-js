// the promise is used for asynchronous requests that may or may not return a result to us.

// fetch connects with a url and waits for a result.
fetch('https://www.dnd5eapi.co/api/classes/')
  .then( res => res.json() ) // the then clausule is needed to manipulate the result
  .then( data => {
    console.log(data.results)
  })

  // asyn await are similar to fetch then

  const obtain_classes = async () => {
    try {
      const res = await fetch("https://www.dnd5eapi.co/api/classes/");
      const data = await res.json();
      console.log(data.results);
      // map returns an array, the first parameter is a fat arrow function
      // where the parameters are each of the objects
      const classes = data.results.map(pjClass => pjClass);
      // filter take a fat arrow function like parameter. the function´s parameter
      // are each of objects to filter and will return the objects that coincide with 
      // the condition inside her
      const barbarian_class = classes.filter(clas => clas.name === 'Barbarian')
      console.log(classes);
    } catch (error) {
      console.log(error);
    }
  };
  
  obtain_classes();
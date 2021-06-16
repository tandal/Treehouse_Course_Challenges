const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
  };
  
  const message = `
  Hi, I'm ${person.name}. I live in ${person.city}.
  Most know me as ${person.nickname}. 
  I have ${person.skills.length} skills: ${person.skills.join(', ')}
  `
  console.log(message);

  
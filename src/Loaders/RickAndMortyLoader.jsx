const RickAndMortyLoader = async ({params: {page = 1}}) => {
  const GET_CHARACTERS = `
{
  characters(page: ${page}) {
    info {
      pages
    }
    results {
      id
      name
      status
      species
      image
    }
  }
}
`
  try {
    const response = await fetch(
      'https://rickandmortyapi.com/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({query: GET_CHARACTERS})
      }
    );

    if (!response.ok) {
      throw Error('Could not fetch the data')
    }

    return response.json()

  } catch (error) {
    throw Error('Could not fetch the data')
  }
}
export default RickAndMortyLoader;
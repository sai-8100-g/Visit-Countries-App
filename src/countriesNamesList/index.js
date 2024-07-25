import {Li, Para, Button} from './style'

const CountriesNameList = props => {
  const {data, getIdToAddInVisitedCountriesList} = props
  const {name, isVisited, id} = data
  const onClickToShowCountryInVistedCountriesList = () => {
    getIdToAddInVisitedCountriesList(id)
  }
  return (
    <Li>
      <Para>{name}</Para>
      {isVisited ? (
        <Para visited>Visited</Para>
      ) : (
        <Button
          isVisited={isVisited}
          type="button"
          onClick={onClickToShowCountryInVistedCountriesList}
        >
          Visit
        </Button>
      )}
    </Li>
  )
}

export default CountriesNameList

import {Li, Img, ListInfoContainer, Para, Button} from './style'

const VisitedCountriesList = props => {
  const {data, getRemovingCountryId} = props
  const {name, imageUrl, id} = data
  const onClickToRemoveCountryFromCountriesList = () => {
    getRemovingCountryId(id)
  }
  return (
    <Li>
      <Img src={imageUrl} alt="thumbnail" />
      <ListInfoContainer>
        <Para>{name}</Para>
        <Button type="button" onClick={onClickToRemoveCountryFromCountriesList}>
          Remove
        </Button>
      </ListInfoContainer>
    </Li>
  )
}

export default VisitedCountriesList

import { Avatar, Card, Container, ImageList, ImageListItem, ImageListItemBar, Rating, Tooltip } from '@mui/material'
import { useValue } from '../../context/ContextProvider'
import { StarBorder } from '@mui/icons-material';

const Gears = () => {
  const { 
    state: { filteredGears },
    dispatch
  } = useValue();

  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important '
        }}
      >
        {filteredGears.map((gear) => (
          <Card key={gear._id}>
            <ImageListItem sx={{ height: '100% !important' }}>
              <ImageListItemBar
                sx={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={gear.price === 0 ? 'Free Rental' : '€' + gear.price}
                actionIcon={
                  <Tooltip title={gear.uName} sx={{ mr: '5px' }}>
                    <Avatar src={gear.uPhoto} />
                  </Tooltip>
                }
                position="top"
              />
              <img
                src={gear.images[0]}
                alt={gear.title}
                loading="lazy"
                style={{ cursor: 'pointer', width: '100%', height: '200px', objectFit: 'cover' }}
                onClick={()=> dispatch({
                  type:'UPDATE_GEAR',
                  payload: gear
                })}
              />
              {/* Adjust the height and width as needed */}
              <ImageListItemBar
                title={gear.title}
                actionIcon={
                  <Rating
                    sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
                    name="gear-rating"
                    defaultValue={3.5}
                    precision={0.5}
                    emptyIcon={<StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />}
                  />
                }
              />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
    </Container>
  );
};

export default Gears;
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { fetchUpdateProduct } from '~/apis'
import { useState } from 'react'
import PropTypes from 'prop-types'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

export default function ModalEdit({ product }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(product)

  const setObject = (e) => {
    const value = e.target.value
    const newOject = { ...formData }
    const id = e.target.id
    newOject[id] = value
    console.log(newOject)
    setFormData(newOject)
  }
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }
  const handleSave = () => {
    fetchUpdateProduct(formData)
    handleClose()
    // window.location.reload();
  }

  return (
    <Box>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography gutterBottom variant='h5'>
            Edit Product
          </Typography>
          <TextField
            id='name'
            label='Product name'
            variant='standard'
            value={formData.name}
            onChange={setObject}
            sx={{ width: '90%' }}
          />
          <TextField
            id='description'
            label='Product description'
            variant='standard'
            sx={{ width: '90%' }}
            value={formData.description}
            onChange={setObject}
          />

          <TextField
            id='price'
            label='price'
            variant='standard'
            sx={{ width: '90%' }}
            value={formData.price}
            onChange={setObject}
          />
          <TextField
            id='imageUrl'
            label='image '
            variant='standard'
            sx={{ width: '90%' }}
            value={formData.imageUrl}
            onChange={setObject}
          />
          <Button>
            <input type='file'></input>
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Button variant='contained' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='contained' onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

ModalEdit.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
}

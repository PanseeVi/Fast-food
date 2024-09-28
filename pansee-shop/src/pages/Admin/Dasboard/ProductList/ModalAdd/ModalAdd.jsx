import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { fetchAddProduct } from '~/apis'
import { useState } from 'react'

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

export default function ModalAdd() {
  const [open, setOpen] = new useState(false)
  const [dataObject, setDataObject] = new useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  })

  const setObject = (e) => {
    const value = e.target.value
    console.log(dataObject)
    const newOject = { ...dataObject }
    const id = e.target.id
    newOject[id] = value
    setDataObject(newOject)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSave = () => {
    fetchAddProduct(dataObject)
    handleClose()
    window.location.reload()
  }

  return (
    <Box>
      <Button variant='contained' onClick={handleOpen}>
        Add product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography gutterBottom variant='h5'>
            Add new product
          </Typography>
          <TextField
            id='name'
            label='Product name'
            variant='standard'
            // value={name}
            onChange={setObject}
            sx={{ width: '90%' }}
          />
          <TextField
            id='description'
            label='Product description'
            variant='standard'
            sx={{ width: '90%' }}
            // value={description}
            onChange={setObject}
          />
          <TextField
            id='quantity'
            label='quantity'
            variant='standard'
            sx={{ width: '90%' }}
            // value={quantity}
            onChange={setObject}
          />
          <TextField
            id='price'
            label='price'
            variant='standard'
            sx={{ width: '90%' }}
            // value={price}
            onChange={setObject}
          />
          <TextField
            id='imageUrl'
            label='image Url'
            variant='standard'
            sx={{ width: '90%' }}
            // value={imageUrl}
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

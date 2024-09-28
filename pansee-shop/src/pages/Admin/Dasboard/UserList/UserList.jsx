'use client'
import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import {
  fetchUserListAPI,
  fetchUpdateUserAPI,
  fetchDeleteUserAPI,
} from '~/apis'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const fetchedUsers = await fetchUserListAPI()
        console.log(fetchedUsers)
        setUsers(fetchedUsers)
      } catch (error) {
        console.log(error)
        setError('Failed to load users. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleEdit = (user) => {
    setEditingUser(user)
    setOpenEditDialog(true)
  }

  const handleEditSubmit = async () => {
    try {
      await fetchUpdateUserAPI(editingUser._id, editingUser)
      setUsers(users.map((u) => (u._id === editingUser._id ? editingUser : u)))
      setOpenEditDialog(false)
    } catch (error) {
      console.error('Failed to update user:', error)
      // Handle error (e.g., show error message)
    }
  }

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await fetchDeleteUserAPI(userId)
        setUsers(users.filter((u) => u._id !== userId))
      } catch (error) {
        console.error('Failed to delete user:', error)
      }
    }
  }

  if (loading) return <CircularProgress />
  if (error) return <Typography color='error'>{error}</Typography>

  return (
    <div>
      <Typography variant='h4' gutterBottom>
        User List
      </Typography>
      {users.length === 0 ? (
        <Typography>No users found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(user)}>Edit</Button>
                    <Button onClick={() => handleDelete(user._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label='Email'
            value={editingUser?.email || ''}
            onChange={(e) =>
              setEditingUser({ ...editingUser, email: e.target.value })
            }
            fullWidth
            margin='normal'
          />
          <TextField
            label='Phone Number'
            value={editingUser?.phoneNumber || ''}
            onChange={(e) =>
              setEditingUser({ ...editingUser, phoneNumber: e.target.value })
            }
            fullWidth
            margin='normal'
          />
          <TextField
            label='Role'
            value={editingUser?.role || ''}
            onChange={(e) =>
              setEditingUser({ ...editingUser, role: e.target.value })
            }
            fullWidth
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

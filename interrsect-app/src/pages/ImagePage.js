import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { FileUploader } from 'react-drag-drop-files';
import { ocr } from '../functions/ocr';
import { query } from '../functions/query';
import useResponsive from '../hooks/useResponsive';

export default function ImagePage() {
  const fileTypes = ['JPG', 'PNG', 'JPEG'];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    setPicture(URL.createObjectURL(file));
  };

  const isWide = useResponsive('up', 'lg');
  const [picture, setPicture] = useState();
  const [text, setText] = useState();
  const [prediction, setPrediction] = useState();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <Helmet>
        <title>Imaging Beta</title>
        <meta name="description" content="Image summarization beta" />
      </Helmet>
      <Container>
        <Typography variant="h1" sx={{ p: 2 }}>
          Imaging Beta
        </Typography>
        <Card>
          <Typography variant="h3" sx={{ p: 2 }}>
            Try out image inputs in BARTxiv's summarizer
          </Typography>
          <Alert severity="info" sx={{ m: 2 }}>
            Images taken in good lighting, with less blur, and clearer handwriting will produce better results.
          </Alert>
          <Alert severity="success" sx={{ m: 2 }}>
            Uploaded images are not saved on this website.
          </Alert>
          <Container sx={{ display: 'flex', flexDirection: isWide ? 'column' : 'row' }}>
            {picture == null ? (
              <FileUploader
                handleChange={handleChange}
                types={fileTypes}
                hoverTitle="Drop Here"
                label="Upload a picture to continue"
                children={
                  <Box sx={{ border: '2px dashed grey', borderRadius: 1 }}>
                    <Typography sx={{ p: 4 }}>Drop or click to upload an image to continue</Typography>
                  </Box>
                }
              />
            ) : (
              <Box component="img" alt="Uploaded image" src={picture} sx={{ display: 'flex',  }} />
            )}
            <Box>
              {picture == null ? (
                <></>
              ) : (
                <>
                  <Button variant="outlined" component="label">
                    Change Picture
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      formTarget="_top"
                      onChange={(e) => {
                        setPrediction();
                        setText();
                        onChangePicture(e);
                      }}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      ocr(picture).then((value) => {
                        setText(value);
                        const data = {
                          inputs: text,
                          options: {
                            wait_for_model: true,
                          },
                        };
                        query(data).then((input) => {
                          setPrediction(input);
                        });
                      });
                    }}
                  >
                    Submit
                  </Button>
                </>
              )}

              {text == null ? (
                <></>
              ) : (
                <Button variant="outlined" onClick={handleClickOpen}>
                  See extracted text
                </Button>
              )}
            </Box>
          </Container>
        </Card>

        <Card sx={{ m: 2 }}>
          <Typography>{prediction}</Typography>
        </Card>
      </Container>
      <Dialog open={open} onClose={handleClose} scroll="body">
        <DialogTitle>Extracted Text</DialogTitle>
        <DialogContent>{text}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

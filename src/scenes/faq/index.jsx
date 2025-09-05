import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions – Janitri Innovations" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Janitri Innovations' mission?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Janitri Innovations is dedicated to reducing maternal and neonatal mortality in low-resource settings through affordable, AI-powered medical devices. Our flagship product, Janitri Gem, enables continuous, non-invasive monitoring of fetal and maternal health during labor, especially in rural and underserved areas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the Janitri Gem, and how does it work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Janitri Gem is a wearable, wireless device that attaches to the mother’s abdomen during labor. It continuously monitors fetal heart rate, uterine contractions, maternal heart rate, and labor progress using advanced sensors and AI algorithms. Data is transmitted in real time to a smartphone app, enabling timely interventions by healthcare providers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is the Janitri Gem safe and clinically validated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the Janitri Gem is non-invasive, safe for both mother and baby, and has undergone clinical validation in multiple hospitals across India, including collaborations with government and private healthcare institutions. It meets regulatory standards and is designed to support WHO-recommended birth monitoring practices.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where is Janitri Gem currently being used?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Janitri Gem is deployed in rural clinics, primary health centers, and community settings across India, particularly in states like Tamil Nadu, Uttar Pradesh, and Jharkhand. It is also being piloted in other low- and middle-income countries in partnership with global health organizations.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Does Janitri Gem replace traditional fetal monitoring?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, the Janitri Gem complements traditional monitoring methods like cardiotocography (CTG). It is especially useful in settings where access to CTG machines or skilled personnel is limited. It provides continuous, easy-to-interpret data and alerts for early signs of distress, improving access to timely care.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can hospitals or NGOs partner with Janitri Innovations?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hospitals, healthcare providers, and NGOs interested in deploying Janitri Gem can reach out to us for pilot programs, bulk procurement, or research collaborations. We offer training, technical support, and integration assistance. Contact us at <strong>info@janitri.in</strong> or visit www.janitri.in for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
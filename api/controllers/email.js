import mg from "mailgun-js";
var api_key = "947e8f92f71f2bb13eb478c69f6d80ef-27a562f9-135666f2";
var domain = "sandbox71bf8fd460f240ef9a0c94a5b2793305.mailgun.org";
var mailgun = mg({ apiKey: api_key, domain: domain });

export const sendEmail = (req, res, next) => {
  const datas = req.body;
  mailgun.messages().send(
    {
      from: datas.email,
      to: "bm.mutwiri@gmail.com",
      subject: `message from ${datas.name}`,
      html: `
            <h3>Information</h3>
            <ul>
            <li>Name: ${datas.name}</li>
            <li>Email: ${datas.email}</li>
            <li>Phone: ${datas.phone}</li>
            </ul>
            <h3>Message</h3>
            <p>Country: ${datas.country}</p>
            <p>Event Booked: ${datas.event}</p>
            <p>Date: ${datas.date}</p>
            <ul>
            Services:
            ${datas.services}
            </ul>
            Message:
            <p>${datas.message}</p>
            `,
    },
    (error, body) => {
      if (error) {
        console, log(error);
        res.status(500).send({ msg: "Error sending email" });
      } else {
        console.log(body);
        res.status(200).send({ msg: "Email Sent Successfully" });
      }
    }
  );
};

package mail

import (
	"crypto/tls"
	"fmt"
	"net/smtp"
)

type MailLogin struct {
	Host     string
	Username string
	Password string
}

const SEZNAM_HOST string = "smtp.seznam.cz"

func SendEmail(to string, subject string, body string) error {
	login := MailLogin{
		Host:     SEZNAM_HOST,
		Username: "spotilieservice@seznam.cz",
		Password: "N$65f#m9tdK5",
	}

	headers := make(map[string]string)
	headers["From"] = "Spotilie <" + login.Username + ">"
	headers["To"] = to
	headers["Subject"] = subject
	headers["Content-Type"] = "text/html"
	headers["charset"] = "UTF-8"

	message := ""
	for k, v := range headers {
		message += fmt.Sprintf("%s: %s\r\n", k, v)
	}

	message += "\r\n" + body

	auth := smtp.PlainAuth("", login.Username, login.Password, login.Host)

	tlsConfig := &tls.Config{
		InsecureSkipVerify: true,
		ServerName:         login.Host,
	}

	conn, err := tls.Dial("tcp", login.Host+":465", tlsConfig)
	if err != nil {
		return err
	}

	defer conn.Close()

	client, err := smtp.NewClient(conn, login.Host)
	if err != nil {
		return err
	}

	if err = client.Auth(auth); err != nil {
		return err
	}

	if err = client.Mail(login.Username); err != nil {
		return err
	}

	if err = client.Rcpt(to); err != nil {
		return err
	}

	// Data
	w, err := client.Data()
	if err != nil {
		return err
	}

	_, err = w.Write([]byte(message))
	if err != nil {
		return err
	}

	err = w.Close()
	if err != nil {
		return err
	}

	err = client.Quit()
	if err != nil {
		return err
	}

	return nil
}

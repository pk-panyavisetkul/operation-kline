import React, { useState, useCallback } from "react";
import {
  AppProvider,
  Autocomplete,
  Icon,
  Form,
  FormLayout,
  TextField,
  Button,
  ChoiceList,
  Layout,
  Card,
  ButtonGroup
} from "@shopify/polaris";
import { SearchMinor, RefreshMajorMonotone } from "@shopify/polaris-icons";

function MessageSelect1() {
  const mockupOptionList = [
    {
      value: "ติดต่อ Operation กลับ",
      label: "ติดต่อ Operation กลับ"
    },
    {
      value: "Upload เอกสารเพิ่ม 1 หน้า",
      label: "Upload เอกสารเพิ่ม 1 หน้า"
    },
    {
      value: "ขอ Slip เงินเดือน",
      label: "ขอ Slip เงินเดือน"
    }
  ];

  const mockupChoiceList = [
    { label: "ส่ง SMS", value: "SMS" },
    { label: "ส่ง Email", value: "Email" }
  ];

  // eslint-disable-next-line
  const [messageList, setMessageList] = useState([]);
  // eslint-disable-next-line
  const [inputFilter, setInputFilter] = useState("");
  // eslint-disable-next-line
  const [optionList, setOptionList] = useState(mockupOptionList);
  const [message, setMessage] = useState("");

  const updateText = useCallback(
    value => {
      setInputFilter(value);

      if (value === "") {
        setOptionList(mockupOptionList);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = mockupOptionList.filter(option =>
        option.label.match(filterRegex)
      );
      setOptionList(resultOptions);
    },
    [mockupOptionList]
  );

  const updateSelection = useCallback(
    selected => {
      messageList.push(selected[0]);
      console.log(messageList);
      setMessage(message.concat(selected[0]));
    },
    [messageList, message]
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      value={inputFilter}
      prefix={<Icon source={SearchMinor} color="inkLighter" />}
      placeholder="Search"
    />
  );

  const handleMessageChange = useCallback(value => setMessage(value), []);

  const clearMessage = useCallback(value => setMessage(""), []);

  const [selectedChoice, setSelectedChoice] = useState(["hidden"]);

  const handleChange = useCallback(value => setSelectedChoice(value), []);

  const handleSubmitSendSMSEmail = () => {
    // Send SMS/Email
    console.log("Call API Send SMS/Email : ", message);
  };

  return (
    <div className="message-select">
      <AppProvider>
        <Layout>
          <Layout.Section>
            <Form onSubmit={handleSubmitSendSMSEmail}>
              <FormLayout>
                <Autocomplete
                  options={optionList}
                  selected={messageList}
                  onSelect={updateSelection}
                  textField={textField}
                />
              </FormLayout>

              <div className="message-list">
                <Card title="Message List" sectioned>
                  <ButtonGroup>
                    <Button onClick={() => updateSelection([mockupOptionList[0].value])}>ติดต่อ Operation กลับ</Button>
                    <Button onClick={() => updateSelection([mockupOptionList[1].value])}>Upload เอกสารเพิ่ม 1 หน้า</Button>
                    <Button onClick={() => updateSelection([mockupOptionList[2].value])}>ขอ Slip เงินเดือน</Button>
                  </ButtonGroup>
                </Card>
              </div>

              <div className="input-message">
                <FormLayout>
                  <FormLayout.Group>
                    <TextField
                      value={message}
                      onChange={handleMessageChange}
                      type="text"
                    />
                    <span className="icon-refresh" onClick={clearMessage}>
                      <Icon source={RefreshMajorMonotone} />
                    </span>
                    <Button submit>Send</Button>
                  </FormLayout.Group>
                  <ChoiceList
                    choices={mockupChoiceList}
                    selected={selectedChoice}
                    onChange={handleChange}
                  />
                </FormLayout>
              </div>
            </Form>
          </Layout.Section>
        </Layout>
      </AppProvider>
    </div>
  );
}

export default MessageSelect1;

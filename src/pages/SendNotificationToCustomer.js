import React, { useState, useCallback } from "react";
import { AppProvider, Modal, Page, Button } from "@shopify/polaris";
import MessageSelect from "../component/MessageSelectComponent";

function SendNotificationToCustomer() {
  const [modalActive, setModalActive] = useState(true);
  const toggleActive = useCallback(() => setModalActive(active => !active), []);

  return (
    <AppProvider>
      <Page>
      <Button onClick={toggleActive}>Open Modal</Button>
      </Page>
      <Modal
        large
        open={modalActive}
        onClose={toggleActive}
        title="Contact via SMS/Email"
        secondaryActions={[
          {
            content: "Cancel",
            onAction: toggleActive
          }
        ]}
      >
        <div className="send-notification-to-customer-modal">
          <Modal.Section>
            <p className="description-panel">ส่งข้อความหรืออีเมลล์ถึง User</p>
            <MessageSelect />
          </Modal.Section>
        </div>
      </Modal>
    </AppProvider>
  );
}

export default SendNotificationToCustomer;

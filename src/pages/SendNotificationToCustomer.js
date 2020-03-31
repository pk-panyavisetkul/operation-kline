import React, { useState, useCallback } from "react";
import { AppProvider, Modal } from "@shopify/polaris";
import MessageSelect from "../component/MessageSelectComponent";

function SendNotificationToCustomer() {
  const [active, setActive] = useState(true);
  const toggleActive = useCallback(() => setActive(active => !active), []);

  return (
    
      <AppProvider>
        <Modal
          large
          open={active}
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
      /* <Page title="Contact via SMS/Email">
            <p className="description-panel">ส่งข้อความหรืออีเมลล์ถึง User</p>
            <MessageSelect />
          </Page> */
    
  );
}

export default SendNotificationToCustomer;

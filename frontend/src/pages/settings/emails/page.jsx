"use client"

import { useState } from "react"
import SettingsNav from "../../../components/settings_nav"

const EmailSettings = () => {
  const [notifications, setNotifications] = useState({
    receivedMessage: false,
    sentMessage: false,
    newFollower: false,
    deliveryDispatched: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Saving notification settings:", notifications)
  }

  return (
    <div>
      <SettingsNav />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Notifications</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <p className="text-gray-700 mb-3">Email me when..</p>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-700 rounded border-gray-300"
                    checked={notifications.receivedMessage}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        receivedMessage: e.target.checked,
                      })
                    }
                  />
                  <span className="ml-2 text-gray-700">Someone sends me a message</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-700 rounded border-gray-300"
                    checked={notifications.sentMessage}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        sentMessage: e.target.checked,
                      })
                    }
                  />
                  <span className="ml-2 text-gray-700">I send a message</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-700 rounded border-gray-300"
                    checked={notifications.newFollower}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        newFollower: e.target.checked,
                      })
                    }
                  />
                  <span className="ml-2 text-gray-700">Someone follows me</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-700 rounded border-gray-300"
                    checked={notifications.deliveryDispatched}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        deliveryDispatched: e.target.checked,
                      })
                    }
                  />
                  <span className="ml-2 text-gray-700">Delivery has been dispatched</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailSettings


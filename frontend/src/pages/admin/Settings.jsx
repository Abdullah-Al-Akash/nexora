// src/pages/admin/Settings.jsx

import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const Settings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-6">Settings</h2>
      <Card className="max-w-2xl">
        <form className="space-y-4">
          <Input label="Site Name" placeholder="Nexora" />
          <Input label="Tagline" placeholder="Your Trusted Agency" />
          <Input label="Email" type="email" placeholder="hello@nexora.com" />
          <Input label="Phone" placeholder="+1 (555) 123-4567" />
          <Button variant="primary">Save Changes</Button>
        </form>
      </Card>
    </div>
  )
}

export default Settings
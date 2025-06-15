"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { ShoppingBag, MapPin, Settings, User } from "lucide-react";
import Cookies from "js-cookie";
import { logout } from "@/app/actions/auth";

interface Order {
  id: string;
  total: number;
  createdAt: Date;
  isPaid: boolean;
  products: {
    name: string;
    qty: number;
    price: number;
  }[];
}

interface ShippingAddress {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface ProfileClientProps {
  initialUser: {
    id: string;
    email: string;
    username: string;
  };
  initialOrders: Order[];
  initialShippingAddress: ShippingAddress | null;
}

export default function ProfileClient({
  initialUser,
  initialOrders,
  initialShippingAddress,
}: ProfileClientProps) {
  const router = useRouter();
  const [user, setUser] = useState(initialUser);
  const [orders, setOrders] = useState(initialOrders);
  const [username, setUsername] = useState(initialUser.username);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(
    initialShippingAddress
  );
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateShippingForm = (data: Record<string, string>) => {
    const errors: Record<string, string> = {};

    if (!data.firstName?.trim()) errors.firstName = "First name is required";
    if (!data.lastName?.trim()) errors.lastName = "Last name is required";
    if (!data.phoneNumber?.trim())
      errors.phoneNumber = "Phone number is required";
    else if (!/^\+?[\d\s-]{10,}$/.test(data.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }
    if (!data.address1?.trim()) errors.address1 = "Address is required";
    if (!data.city?.trim()) errors.city = "City is required";
    if (!data.state?.trim()) errors.state = "State is required";
    if (!data.zipCode?.trim()) errors.zipCode = "ZIP code is required";
    else if (!/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
      errors.zipCode = "Please enter a valid ZIP code";
    }
    if (!data.country?.trim()) errors.country = "Country is required";

    return errors;
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Username cannot be empty");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        // Update username cookie on client side as well
        Cookies.set("username", username, {
          path: "/",
          sameSite: "lax",
        });
        toast.success("Profile updated successfully");
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile");
    }
    setIsLoading(false);
  };

  const handleShippingAddressSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addressData = Object.fromEntries(formData.entries());

    // Validate form
    const errors = validateShippingForm(addressData as Record<string, string>);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    try {
      const response = await fetch("/api/user/shipping-address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
      });
      if (response.ok) {
        const data = await response.json();
        setShippingAddress(data);
        toast.success("Shipping address saved successfully");
      } else {
        toast.error("Failed to save shipping address");
      }
    } catch (error) {
      console.error("Failed to save shipping address:", error);
      toast.error("Failed to save shipping address");
    }
  };

  const handleLogout = async () => {
    try {
      // First remove cookies on the server side
      await logout();

      // Then remove cookies on the client side
      Cookies.remove("userId");
      Cookies.remove("userEmail");
      Cookies.remove("username");
      Cookies.remove("token");

      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">My Profile</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-lg shadow-sm w-full sm:w-auto flex space-x-2">
            <TabsTrigger
              value="profile"
              className="flex items-center gap-2 flex-1 sm:flex-none"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex items-center gap-2 flex-1 sm:flex-none"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="flex items-center gap-2 flex-1 sm:flex-none"
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Shipping</span>
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex items-center gap-2 flex-1 sm:flex-none"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Personal Information
              </h2>
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-700">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full sm:w-96"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={user.email}
                    disabled
                    className="bg-gray-50 w-full sm:w-96 text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  {isLoading ? "Updating..." : "Update Profile"}
                </Button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Order History
              </h2>
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No orders yet
                  </h3>
                  <p className="text-gray-500">
                    When you make your first order, it will appear here.
                  </p>
                  <Button
                    onClick={() => router.push("/products")}
                    className="mt-4"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      onClick={() => router.push(`/order/${order.id}`)}
                      className="bg-white p-6 rounded-lg border hover:border-primary transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <p className="font-medium text-lg">
                            Order #{order.id.slice(-6)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                          <p className="text-sm mt-2">
                            {order.products.length}{" "}
                            {order.products.length === 1 ? "item" : "items"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">
                            ${order.total.toFixed(2)}
                          </p>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.isPaid
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.isPaid ? "Paid" : "Pending"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="shipping">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                {shippingAddress
                  ? "Edit Shipping Address"
                  : "Add Shipping Address"}
              </h2>
              <form
                onSubmit={handleShippingAddressSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      defaultValue={shippingAddress?.firstName}
                      className={formErrors.firstName ? "border-red-500" : ""}
                      placeholder="John"
                    />
                    {formErrors.firstName && (
                      <p className="text-sm text-red-500">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      defaultValue={shippingAddress?.lastName}
                      className={formErrors.lastName ? "border-red-500" : ""}
                      placeholder="Doe"
                    />
                    {formErrors.lastName && (
                      <p className="text-sm text-red-500">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      defaultValue={shippingAddress?.phoneNumber}
                      className={formErrors.phoneNumber ? "border-red-500" : ""}
                      placeholder="+1 (555) 000-0000"
                    />
                    {formErrors.phoneNumber && (
                      <p className="text-sm text-red-500">
                        {formErrors.phoneNumber}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address1" className="text-gray-700">
                      Address Line 1
                    </Label>
                    <Input
                      id="address1"
                      name="address1"
                      defaultValue={shippingAddress?.address1}
                      className={formErrors.address1 ? "border-red-500" : ""}
                      placeholder="123 Main St"
                    />
                    {formErrors.address1 && (
                      <p className="text-sm text-red-500">
                        {formErrors.address1}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address2" className="text-gray-700">
                      Address Line 2 (Optional)
                    </Label>
                    <Input
                      id="address2"
                      name="address2"
                      defaultValue={shippingAddress?.address2}
                      placeholder="Apt 4B"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">
                      City
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      defaultValue={shippingAddress?.city}
                      className={formErrors.city ? "border-red-500" : ""}
                      placeholder="New York"
                    />
                    {formErrors.city && (
                      <p className="text-sm text-red-500">{formErrors.city}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-700">
                      State
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      defaultValue={shippingAddress?.state}
                      className={formErrors.state ? "border-red-500" : ""}
                      placeholder="NY"
                    />
                    {formErrors.state && (
                      <p className="text-sm text-red-500">{formErrors.state}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-gray-700">
                      ZIP Code
                    </Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      defaultValue={shippingAddress?.zipCode}
                      className={formErrors.zipCode ? "border-red-500" : ""}
                      placeholder="10001"
                    />
                    {formErrors.zipCode && (
                      <p className="text-sm text-red-500">
                        {formErrors.zipCode}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-gray-700">
                      Country
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      defaultValue={shippingAddress?.country}
                      className={formErrors.country ? "border-red-500" : ""}
                      placeholder="United States"
                    />
                    {formErrors.country && (
                      <p className="text-sm text-red-500">
                        {formErrors.country}
                      </p>
                    )}
                  </div>
                </div>
                <Button type="submit" className="w-full md:w-auto">
                  Save Address
                </Button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Account Settings
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-medium text-red-800 mb-2">
                    Danger Zone
                  </h3>
                  <p className="text-sm text-red-600 mb-4">
                    Once you logout, you'll need to login again to access your
                    account.
                  </p>
                  <Button
                    variant="destructive"
                    onClick={() => setShowLogoutDialog(true)}
                    className="w-full sm:w-auto"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Logout</DialogTitle>
              <DialogDescription>
                Are you sure you want to logout? You will need to login again to
                access your account.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-end">
              <Button
                variant="outline"
                onClick={() => setShowLogoutDialog(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

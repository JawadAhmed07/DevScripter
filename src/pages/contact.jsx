import React from "react";
import { Layout, Form, Input, Button, Row, Col, Card, Select } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, UserOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Option } = Select;


function Contact (){
    const handleSubmit = (values) => {
        console.log("Form Submitted:", values);
      };
    
      return (
        <Layout className="min-h-screen bg-gray-50">
          <Content>
            {/* Google Maps Embed */}
            <div className="w-full h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095794!2d144.9537353153189!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f6db1f1b0d9b!2sEnvato!5e0!3m2!1sen!2sin!4v1632897999821!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="rounded-lg border"
              ></iframe>
            </div>
    
            <div className="max-w-6xl mx-auto p-8">
              <Row gutter={[16, 16]}>
                {/* Contact Form */}
                <Col xs={24} md={12}>
                  <Card title="Contact Us" bordered={false} className="shadow-md">
                    <Form
                      layout="vertical"
                      onFinish={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name Input */}
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: "Please enter your name" }]}
                      >
                        <Input prefix={<UserOutlined />} placeholder="Enter your name" className="rounded-lg" />
                      </Form.Item>
    
                      {/* Email Input */}
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          { required: true, type: "email", message: "Please enter a valid email" },
                        ]}
                      >
                        <Input prefix={<MailOutlined />} placeholder="Enter your email" className="rounded-lg" />
                      </Form.Item>
    
                      {/* Service Type Dropdown */}
                      <Form.Item
                        name="service"
                        label="Service Type"
                        rules={[{ required: true, message: "Please select a service type" }]}
                      >
                        <Select placeholder="Select a service type" className="rounded-lg">
                          <Option value="web-development">Web Development</Option>
                          <Option value="graphic-design">Graphic Design</Option>
                          <Option value="seo">SEO</Option>
                          <Option value="digital-marketing">Digital Marketing</Option>
                        </Select>
                      </Form.Item>
    
                      {/* Budget Input */}
                      <Form.Item
                        name="budget"
                        label="Budget"
                        rules={[{ required: true, message: "Please enter your budget" }]}
                      >
                        <Input placeholder="Enter your budget" className="rounded-lg" />
                      </Form.Item>
    
                      {/* Message Input */}
                      <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true, message: "Please enter your message" }]}
                      >
                        <Input.TextArea placeholder="Write your message here" rows={4} className="rounded-lg" />
                      </Form.Item>
    
                      {/* Submit Button */}
                      <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>
    
                {/* Contact Information */}
                <Col xs={24} md={12}>
                  <Card title="Contact Information" bordered={false} className="shadow-md">
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <PhoneOutlined className="mr-2 text-xl text-blue-500" />
                        <span>+123 456 7890</span>
                      </p>
                      <p className="flex items-center mb-2">
                        <MailOutlined className="mr-2 text-xl text-blue-500" />
                        <span>info@portfolio.com</span>
                      </p>
                      <p className="flex items-center mb-2">
                        <EnvironmentOutlined className="mr-2 text-xl text-blue-500" />
                        <span>123 Portfolio St, Web City, Country</span>
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <InfoCircleOutlined className="mr-2 text-xl text-blue-500" />
                        <span>Working Hours: Mon - Fri, 9 AM - 6 PM</span>
                      </p>
                      <p className="flex items-center mb-2">
                        <InfoCircleOutlined className="mr-2 text-xl text-blue-500" />
                        <span>Follow us on <a href="#" className="text-blue-500 hover:underline">Social Media</a></span>
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      );
}
export default Contact;
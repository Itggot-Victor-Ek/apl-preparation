require 'test_helper'

class BreadImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bread_images_index_url
    assert_response :success
  end

  test "should get show" do
    get bread_images_show_url
    assert_response :success
  end

end

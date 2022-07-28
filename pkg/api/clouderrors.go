package api

import (
	"net/http"
)

// Custom errors

var ResourceUnderGroupNotFound = func(m map[string]string) *CloudError {
	return NewCloudError(
		http.StatusNotFound,
		CloudErrorCodeResourceNotFound,
		"", "The Resource '%s/%s' under resource group '%s' was not found.",
		m["resourceType"], m["resourceName"], m["resourceGroupName"],
	)
}
